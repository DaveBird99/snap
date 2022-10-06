import {describe, expect, test} from '@jest/globals';
import React, {useState as useStateMock, useEffect as useEffectMock} from 'react';
import { useDeck } from "../src/hooks/useDeck"

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

const setState = jest.fn();
  const useEffect = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);

    useEffectMock.mockImplementation(init => [init, useEffect]);
  });

describe('useDeck first deck', () => {
  test('fills with 104 cards', () => {
    const { deck } = useDeck()
    expect(deck).toHaveLength(104)
  })

  test('can have top card removed', () => {
    const { deck, pop } = useDeck()
    pop()
    expect(deck).toHaveLength(103)
  })
});

describe('useDeck second deck', () => {
  test('is empty', () => {
    const { deck } = useDeck(false)
    expect(deck).toHaveLength(0)
  })

  test('can have a card added', () => {
    const { deck, add } = useDeck(false)
    const newDeck = add({
      number: 1,
      suit: 'diamond',
    })
    expect(newDeck).toHaveLength(1)
  })
});