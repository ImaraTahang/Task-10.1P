import {faker} from "@faker-js/faker";
const custList =[
    {   "key":0,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "position" : faker.name.jobTitle()
    },
    {   "key":1,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "position" : faker.name.jobTitle()
    },
    {   "key":2,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "position" : faker.name.jobTitle()
    }
]

export default custList