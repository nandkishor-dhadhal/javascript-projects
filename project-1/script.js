var userData = [
    { id: "1", name: "Om", city: "Rajkot", state: "Gujarat" },
    { id: "2", name: "Priya", city: "Ahmedabad", state: "Gujarat" },
    { id: "3", name: "Amit", city: "Surat", state: "Gujarat" },
    { id: "4", name: "Neha", city: "Mumbai", state: "Maharashtra" },
    { id: "5", name: "Rahul", city: "Pune", state: "Maharashtra" },
    { id: "6", name: "Sneha", city: "Nagpur", state: "Maharashtra" },
    { id: "7", name: "Ankit", city: "Rajkot", state: "Gujarat" },
    { id: "8", name: "Ramesh", city: "Indore", state: "Madhya Pradesh" },
    { id: "9", name: "Alok", city: "Bhopal", state: "Madhya Pradesh" },
    { id: "10", name: "Vivek", city: "Pune", state: "Maharashtra" },
    { id: "11", name: "Meena", city: "Rajkot", state: "Gujarat" },
    { id: "12", name: "Pooja", city: "Indore", state: "Madhya Pradesh" },
    { id: "13", name: "Kiran", city: "Surat", state: "Gujarat" },
    { id: "14", name: "Manish", city: "Mumbai", state: "Maharashtra" },
    { id: "15", name: "Ritika", city: "Ahmedabad", state: "Gujarat" },
];
var formatData = function () {
    var userFormattedData = {};
    userData.forEach(function (element) {
        var id = element.id, name = element.name, city = element.city, state = element.state;
        if (!userFormattedData[state]) {
            userFormattedData[state] = {};
        }
        if (!userFormattedData[state][city]) {
            userFormattedData[state][city] = [];
        }
        userFormattedData[state][city].push({ userId: id, userName: name });
    });
    console.log("User Formatted Data:", userFormattedData);
};
formatData();
