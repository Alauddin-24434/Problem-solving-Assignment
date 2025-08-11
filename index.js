// 1.Task: Array Filtering and Mapping

const persion= [
    {
        name:"Alauddin",
        age:25,
        gender:"male"
    },
    {
        name:"Hamida",
        age:65,
        gender:"female"
    },
    {
        name:"Ab Aziz",
        age:70,
        gender:"male"
    },
    {
        name:"Khadiza Akter",
        age:31,
        gender:"female"
    }
]


const remaningPeople= persion?.filter(p=> p.gender ==="female").map(p=>p.name)


console.log(remaningPeople)

