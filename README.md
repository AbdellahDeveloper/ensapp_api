## ENSAPP API
![Logo](/images/ENSAPP%20API%20Banner.png)


![Static Badge](https://img.shields.io/badge/Awesome%20API-8A2BE2?logo=windows&logoColor=white)


## API Reference

#### Get Account Info

```
  GET https://ensapp-api.somee.com/account_infos?username=##&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(17).svg)

#### Get All Account Infos Count
```
  GET https://ensapp-api.somee.com/account_infos/get_all_infos_counts?username=##&password=##
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(16).svg)

#### Change Account's Email
```
  POST https://ensapp-api.somee.com/operations/change_email?username=######&password=###&newEmail=####@gmail.com
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `newEmail` | `string` | **Required**. Your New Email |

#### Response :
![App Screenshot](/images/codesnippet%20(1).svg)

#### Change Account's Phone Number
```
  POST https://ensapp-api.somee.com/operations​/change_phone_number?username=######&password=###&newPhoneNumber=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `newPhoneNumber` | `string` | **Required**. Your New Phone Number   |

#### Response :
![App Screenshot](/images/codesnippet%20(4).svg)

#### Change Account's Password
```
  POST https://ensapp-api.somee.com​/operations​/change_password?username=######&current_password=###&new_password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Current Password |
| `new_password` | `string` | **Required**. Your Desired New Password   |

#### Response :
![App Screenshot](/images/codesnippet%20(3).svg)

#### Verify Account's Personal Data
```
  POST https://ensapp-api.somee.com​​/operations​/personal_data_verification
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Current Password |
| `firstname` | `string` | **Required**. Your First Name in French |
| `lastname` | `string` | **Required**. Your Last Name in French |
| `arabic_firstname` | `string` | **Required**. Your First Name in Arabic |
| `arabic_lastname` | `string` | **Required**. Your Last Name in Arabic |
| `birthday` | `string` | **Required**. Your Birthday (##/##/####) |
| `place_of_birth` | `string` | **Required**. Your Place Of Birth in French |
| `arabic_place_of_birth` | `string` | **Required**. Your Place Of Birth in Arabic |
| `bacYear` | `string` | **Required**. Year When You Got Your Bac (ex: 2023)|
| `cin` | `string` | **Required**. Your National Identity Card (ex: AA112233)|
| `massarcode` | `string` | **Required**. Your Massar Code (ex: G1111111) |

#### Response :
![App Screenshot](/images/codesnippet%20(2).svg)

#### Get 'Emploi Du Temps' URL
```
  GET https://ensapp-api.somee.com/get_emploi_url?username=##&password=##
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(5).svg)

#### Get Library's Books By Page
```
  GET https://ensapp-api.somee.com/get_books_by_page?username=###&password=###&page_index=#
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `page_index` | `int` | **Required**. Page Index (ex: 1) |

#### Response :
![App Screenshot](/images/codesnippet%20(6).svg)

#### Get All Filters Of Books
```
  GET https://ensapp-api.somee.com/library/get_all_filters?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(7).svg)

#### Get Books By Filter & Page
```
  GET https://ensapp-api.somee.com/library/filter?username=###&password=###&filter_id=#&page=#
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `filter_id` | `int` | **Required**. Filter ID From ('/library/get_all_filters') (ex: 3 -> Informatique) |
| `page` | `int` | **Required**. Page Index (ex: 1)|

#### Response :
![App Screenshot](/images/codesnippet%20(8).svg)

#### Get All News
```
  GET https://ensapp-api.somee.com/news/get_all_news?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(9).svg)

#### Get Divers Services IDs
```
  GET https://ensapp-api.somee.com/services/get_all_divers_services?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(10).svg)

#### Get All Program Changes IDs
```
  GET https://ensapp-api.somee.com/services/get_all_program_changes?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(11).svg)

#### Get Listening Cells IDs
```
  GET https://ensapp-api.somee.com/services/get_all_listening_cells?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(12).svg)

#### Get Stages IDs
```
  GET https://ensapp-api.somee.com/services/get_all_stages?username=###&password=###
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |

#### Response :
![App Screenshot](/images/codesnippet%20(13).svg)

#### Send Service Demand By ID (Divers Services)
```
  POST https://ensapp-api.somee.com/​services​/send_service_demand?username=###&password=###&serviceid=#
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `serviceid` | `int` | **Required**. Service ID (ex: 19 -> Attestation d'inscription)|

#### Response :
![App Screenshot](/images/codesnippet%20(14).svg)

#### Start Convention Stage By ID
```
  POST https://ensapp-api.somee.com​/services​/start_convention_stage?username=###&password=###&stageid=#
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `stageid` | `int` | **Required**. Stage ID (ex: 1 -> Projet de fin d'études (PFE))|

#### Response :
![App Screenshot](/images/codesnippet%20(15).svg)

#### Send Listening Appointment Demand
```
  POST https://ensapp-api.somee.com​/​services​/demand_listening_appointment?username=###&password=###&appointmentid=#
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `appointmentid` | `int` | **Required**. Appointment ID (ex: 1 -> Problème personnel|

#### Response :
![App Screenshot](/images/codesnippet%20(14).svg)

#### Send Program Change Demand
```
  Post https://ensapp-api.somee.com​​/services​/demand_program_change?username=###&password=###&programid=#
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your APOGEE or Email |
| `password` | `string` | **Required**. Your ENSAPP Password |
| `programid` | `int` | **Required**. Program ID (ex: 1 -> Double diplomation|

#### Response :
![App Screenshot](/images/codesnippet%20(14).svg)
## 🛠 Built With
![Static Badge](https://img.shields.io/badge/ASP%20.NET%20WEB%20API-6b32fa?logo=dotnet&logoColor=white)

![Static Badge](https://img.shields.io/badge/C%23-006e18?logo=csharp&logoColor=white)




# Hi, I'm Abdellah Elidrissi! 👋

Passionate developer and student with a diverse skill set that spans across various domains. From Web Development utilizing technologies like Asp.net Core MVC, Node.js, HTML, CSS, JavaScript, and React, to Android Development with expertise in Java and Flutter, I've ventured into Desktop Development using WinForms in C# and even dived into the world of Games Development, specializing in Unreal Engine. Additionally, I have a knack for 3D Design, leveraging tools like Blender to bring creative ideas to life.

I embarked on this journey in the world of programming at the age of 13, and my trajectory has been a fascinating evolution, starting from desktop applications to conquering the realms of Android, Games, and finally Web Development. Currently, I'm studying at ENSA MARRAKECH.

With a genuine love for programming, I find joy in turning concepts into functional and aesthetically pleasing applications. I'm excited to see what challenges and innovations lie ahead in this ever-evolving field.
