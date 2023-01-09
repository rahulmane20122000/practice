const list = [
    {
        "isDeleted": false,
        "_id": "633fc189220a5b04730be0e4",
        "productpoints": 2,
        "productName": "bottle",
        "companyName": "milton"
    },
    {
        "isDeleted": false,
        "_id": "633fc1ba220a5b04730be0e5",
        "productpoints": 20,
        "productName": "mobile",
        "companyName": "apple"
    },
    {
        "isDeleted": false,
        "_id": "633fc1cb220a5b04730be0e6",
        "productpoints": 20,
        "productName": "mobile",
        "companyName": "samsung"
    },
    {
        "isDeleted": false,
        "_id": "633fc1f0220a5b04730be0e8",
        "productpoints": 20,
        "productName": "mobile",
        "companyName": "apple"
    }
]

const csv = [
    {
        "username": "rahul20",
        "productname": "bottle",
        "companyname": "milton",
        "quantity": "22"
    },
    {
        "username": "rahul20",
        "productname": "mobile",
        "companyname": "samsung",
        "quantity": "223"
    },
    {
        "username": "rahul20",
        "productname": "laptop",
        "companyname": "apple",
        "quantity": "1"
    },
    {
        "username": "rahul20",
        "productname": "laptop",
        "companyname": "apple",
        "quantity": "23"
    },
    {
        "username": "rahul20",
        "productname": "laptop",
        "companyname": "apple",
        "quantity": "4"
    },
    {
        "username": "rahul20",
        "productname": "laptop",
        "companyname": "apple",
        "quantity": "43"
    },
    {
        "username": "rahul20",
        "productname": "laptop",
        "companyname": "apple",
        "quantity": "43"
    },
    {
        "username": "rahul20",
        "productname": "mobile",
        "companyname": "apple",
        "quantity": "3432"
    },
    {
        "username": "rahul20",
        "productname": "mobile",
        "companyname": "apple",
        "quantity": "2"
    },
    {
        "username": "rahul20",
        "productname": "mobile",
        "companyname": "apple",
        "quantity": "323"
    },
    {
        "username": "rahul20",
        "productname": "mobile",
        "companyname": "apple",
        "quantity": "33"
    }
]

const masterObj = [{
    userName: 'rahul50',
    totalPoints: 100
}, {
    userName: 'rahul20',
    totalPoints: 0
}]

const currentUser = masterObj[masterObj.findIndex(e => e.userName == csv[0].username)]

for (let obj of csv) {
    for (let item of list) {
        let { productName, companyName } = item
        if (Object.values(obj).includes(productName) && Object.values(obj).includes(companyName)) {
            currentUser.totalPoints += item.productpoints * (+obj.quantity)
        }
    }
}

console.log(masterObj)