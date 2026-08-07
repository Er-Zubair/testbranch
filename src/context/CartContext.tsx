'use client';

import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { CartLine, MenuItem } from '@/types';

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: 'ADD_ITEM'; item: MenuItem }
  | { type: 'REMOVE_ITEM'; itemId: string }
  | { type: 'SET_QUANTITY'; itemId: string; quantity: number }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.lines.find((line) => line.item.id === action.item.id);
      if (existing) {
        return {
          lines: state.lines.map((line) =>
            line.item.id === action.item.id ? { ...line, quantity: line.quantity + 1 } : line,
          ),
        };
      }
      return { lines: [...state.lines, { item: action.item, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { lines: state.lines.filter((line) => line.item.id !== action.itemId) };
    case 'SET_QUANTITY': {
      if (action.quantity <= 0) {
        return { lines: state.lines.filter((line) => line.item.id !== action.itemId) };
      }
      return {
        lines: state.lines.map((line) =>
          line.item.id === action.itemId ? { ...line, quantity: action.quantity } : line,
        ),
      };
    }
    case 'CLEAR':
      return { lines: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  setQuantity: (itemId: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [] });

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = state.lines.reduce((sum, line) => sum + line.quantity * line.item.price, 0);
    return {
      lines: state.lines,
      itemCount,
      subtotal,
      addItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
      removeItem: (itemId) => dispatch({ type: 'REMOVE_ITEM', itemId }),
      setQuantity: (itemId, quantity) => dispatch({ type: 'SET_QUANTITY', itemId, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
