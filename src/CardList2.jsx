import React from 'react';
import Card from './Card';
import {faker} from "@faker-js/faker";
import custList from './custList'
import './Card.css'

function cardComponent (cust , i){
    return <Card
    key = {cust.key}
    avatar = {cust.avatar}
    name = {cust.name}
    position = {cust.position}
    />
}

const CardList2 = () =>
{
    return <div className="row">
    {custList.map((cust) =>
     <Card
    key = {cust.key}
    avatar = {cust.avatar}
    name = {cust.name}
    position = {cust.position}
    />
)}
    </div>
}

export default CardList2