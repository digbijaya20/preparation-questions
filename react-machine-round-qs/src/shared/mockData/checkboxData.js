const checkboxData = [
    {
        id: 1,
        name: "Parent1",
        children: [
            {
                id: 2,
                name: "Child1",
                children: [],
            },
            {
                id: 3,
                name: "Child2",
                children: [
                    {
                        id: 4,
                        name: "Grandchild1",
                        children: [],
                    },
                    {
                        id: 5,
                        name: "Grandchild2",
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        name: "Parent2",
        children: [
            {
                id: 7,
                name: "Child3",
                children: [],
            },
            {
                id: 8,
                name: "Child4",
                children: [],
            },
        ],
    },
    {
        id: 9,
        name: "Parent3",
        children: [
            {
                id: 10,
                name: "Child5",
                children: [],
            },
        ],
    },
    {
        id: 11,
        name: "Parent4",
        children: [
            {
                id: 12,
                name: "Child6",
                children: [],
            },
        ],
    }
];
export default checkboxData;
// This is a mock data structure representing a nested checkbox hierarchy.
// Each object in the array represents a checkbox with an id, name, and an array of children.
// The children array can contain more checkboxes, allowing for a multi-level hierarchy.
// This structure is useful for creating nested checkbox components in a user interface.
// The data can be used to render checkboxes dynamically, where each parent checkbox can have multiple child checkboxes.
// The id property is unique for each checkbox, while the name property represents the label for the checkbox.