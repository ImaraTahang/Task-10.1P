import React from 'react';
import Card from './Card';
import {faker} from "@faker-js/faker";
import devList from './devList'
import './Card.css'

function cardComponent (dev , i){
    return <Card
    key = {dev.key}
    avatar = {dev.avatar}
    name = {dev.name}
    position = {dev.position}
    />
}

const CardList = () =>
{
    return <div className="row">
    {devList.map((dev) =>
     <Card
    key = {dev.key}
    avatar = {dev.avatar}
    name = {dev.name}
    position = {dev.position}
    />
)}
    </div>
}

export default CardList