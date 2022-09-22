export const formJson = [{
        id: "1",
        label: `
                If you have problem with pain/aches 
                stiffness,weakness or 
                functoinal problems describe this/thses below.(List the 
                    symptoms in descending order with the most 
                    troublesome first)
                `,
        type: "textarea",
        value: "hey",
        style: {
            display: "block",
            mx: "5%",
            my: "15px",
        },
    },
    {
        id: "2",
        label: "Hove you been diagonsed with this problem?",
        type: "radio",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: "5%",
            my: "15px",
        },
        options: [{
                id: "1",
                label: "Not Relevant",
                type: "radio",
                value: 1,
            },
            {
                id: "2",
                label: "Yes",
                type: "radio",
                value: 2,
            },
            {
                id: "3",
                label: "No",
                type: "radio",
                value: 3,
            },
        ],
    },
    {
        id: "3",
        label: "Did the problem start from a physical trauma?",
        type: "radio",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: "5%",
            my: "15px",
        },
        options: [{
                id: "1",
                label: "Not Relevant",
                type: "radio",
                value: 1,
            },
            {
                id: "2",
                label: "Yes",
                type: "radio",
                value: 2,
            },
            {
                id: "3",
                label: "No",
                type: "radio",
                value: 3,
            },
        ],
    },
    {
        id: "4",
        label: "Did the problem start from a mental trauma?",
        type: "radio",
        value: "",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: "5%",
            my: "15px",
        },
        options: [{
                id: "1",
                label: "Not Relevant",
                type: "radio",
                value: 1,
            },
            {
                id: "2",
                label: "Yes",
                type: "radio",
                value: 2,
            },
            {
                id: "3",
                label: "No",
                type: "radio",
                value: 3,
            },
        ],
    },
    {
        id: "5",
        label: "How often do you experience the problem?",
        type: "checkbox",
        value: "",
        style: {
            display: "block",
            mx: "5%",
            my: "15px",
        },
        options: [{
                id: "1",
                label: "Not Relevant",
                type: "checkbox",
                value: 1,
            },
            {
                id: "2",
                label: "Daily",
                type: "checkbox",
                value: 1,
            },
            {
                id: "3",
                label: "Several Times/week",
                type: "checkbox",
            },
            {
                id: "4",
                label: "a few times/Monts",
                type: "checkbox",
                value: 1,
            },
        ],
    },
    {
        id: "6",
        label: "How intense is the problem on an avarage 1-10 scale?",
        type: "radio",
        value: "",
        style: {
            display: "block",
            mx: "5%",
            my: "15px",
        },
        options: [{
                id: "1",
                label: "1",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse",
                },
            },
            {
                id: "2",
                label: "2",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "3",
                label: "3",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "4",
                label: "4",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "5",
                label: "5",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "6",
                label: "6",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "7",
                label: "7",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "8",
                label: "8",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "9",
                label: "9",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
            {
                id: "10",
                label: "10",
                type: "radio",
                style: {
                    display: "flex",
                    flexDirection: "column-reverse"
                },
            },
        ],
    },

]