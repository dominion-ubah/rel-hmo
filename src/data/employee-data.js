import faker from  'faker';

export function generateUsers() {

  let users = []

  for (let id=1; id <= 10; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let dob = faker.date.past();
    let created_at = faker.date.recent();
    let image = faker.image.avatar();
    let address = faker.address.streetAddress();
    let phone = faker.phone.phoneNumber();
    let gender = faker.random.boolean();
    let confirmed = faker.random.boolean();
    let depts = faker.random.arrayElements(['Engineering', 'Accounting', 'Sales & Marketing', 'Product']);
    let status = faker.random.arrayElements(['Active', 'Inactive', 'Terminated', 'Suspended']);


    users.push({
        "employee_id": id,
        "first_name": firstName,
        "last_name": lastName,
        "dob": dob,
        "gender": gender,
        "pic": image,
        "phone": phone,
        "home_addr": address,
        "department": depts[0],
        "date_employed": created_at,
        "is_confirmed": confirmed,
        "status": status[0],
        "created_at": created_at,
        "email": email
    });
  }
  //Saves first generated data to localstorage so that it doesnt change everytime on load 
  if(!localStorage.getItem('user_data')){
    localStorage.setItem('user_data',JSON.stringify({ "data": users }))
  }

  return JSON.parse(localStorage.getItem('user_data'))
}
