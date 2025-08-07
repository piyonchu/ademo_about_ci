import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment the count by the current value of val', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment(); // val is 1
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.setVal(5);
  });

  // wait for val to update before calling increment
  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(6);
});


  it('should update val correctly', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(10);
    });

    expect(result.current.val).toBe(10);
  });
});
