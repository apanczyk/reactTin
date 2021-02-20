export const mealList = [
    {
        "_id": 1,
        "name": "Pizza Pepperoni",
        "description": "Pizza z pepperoni"
    },
    {
        "_id": 2,
        "name": "Pizza Napolitana",
        "description": "Pizza po neapolitansku"
    },
    {
        "_id": 3,
        "name": "Spaghetti Bolognese",
        "description": "Makaron spaghetti z sosem bolońskim"
    }
]

export const mealDetailsList = [
    {
        "_id": 1,
        "name": "Pizza Pepperoni",
        "description": "Pizza z pepperoni",
        "reviews": [
            {
                "_id": 1,
                "rate": 4,
                "date": "2001-02-01",
                "visitor_id": 2,
                "meal_id": 1,
                "visitor": {
                    "_id": 1,
                    "firstName": "Antek",
                    "lastName": "Nowak",
                }
            },
            {
                "_id": 2,
                "rate": 3,
                "date": "2001-02-01",
                "visitor_id": 2,
                "meal_id": 1,
                "visitor": {
                    "_id": 1,
                    "firstName": "Antek",
                    "lastName": "Nowak",
                }
            }
        ]
    },
    {
        "_id": 2,
        "name": "Pizza Napolitana",
        "description": "Pizza po neapolitansku",
        "reviews": [
            {
                "_id": 3,
                "rate": 3,
                "date": "2001-02-01",
                "visitor_id": 2,
                "meal_id": 1,
                "visitor": {
                    "_id": 1,
                    "firstName": "Antek",
                    "lastName": "Nowak",
                }
            }
        ]
    },
    {
        "_id": 3,
        "name": "Spaghetti Bolognese",
        "description": "Makaron spaghetti z sosem bolońskim",
        "reviews": []
    }
]