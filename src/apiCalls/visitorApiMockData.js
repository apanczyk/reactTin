export const visitorList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski"
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński"
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak"
    }
]

export const visitorDetailsList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "reviews": [
            {
                "_id": 1,
                "rate": 4,
                "date": "2001-01-01",
                "message": "2009-01-01T00:00:00.000Z",
                "visitor_id": 1,
                "meal_id": 1,
                "meal": {
                    "_id": 1,
                    "name": "HR",
                    "description": "500000.00",
                }
            },
            {
                "_id": 3,
                "rate": 5,
                "date": "2009-01-02",
                "message": null,
                "visitor_id": 1,
                "meal_id": 2,
                "meal": {
                    "_id": 2,
                    "name": "Sales",
                    "description": "2000000.00",
                }
            }
        ]
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "reviews": [
            {
                "_id": 2,
                "rate": 3,
                "date": "2001-02-01",
                "message": "2009-02-01T00:00:00.000Z",
                "visitor_id": 2,
                "meal_id": 1,
                "meal": {
                    "_id": 1,
                    "name": "HR",
                    "description": "500000.00",
                }
            }
        ]
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "reviews": []
    }
]