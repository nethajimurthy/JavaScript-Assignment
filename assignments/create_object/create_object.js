function CreateObject(arr) {
    this.firstName=arr["firstName"];
    this.lastName=arr["lastName"];
}
let newobject = new CreateObject(arr);

module.exports = CreateObject;
