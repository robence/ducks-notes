import React from 'react'

import tasks from '../data/tasks';
import { ICard, IIterable } from '../types';

export default function CardListContainer(): JSX.Element {
  return <CardList cards={tasks}></CardList>
}

function CardList({ cards }: { cards: (ICard & IIterable)[] }): JSX.Element {
  return <div>{createCards(cards)}</div>;
}

function Card({ title }: ICard) {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  )
}

function createCards(cards: (ICard & IIterable)[]): JSX.Element[] {
  return cards.map(
    ({ id, title }: ICard & IIterable): JSX.Element => (
      <Card key={id} title={title} />
    ),
  );
}
