import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

// add components - Header, Body, 
class App extends React.Component {
  state = {
    users: [
      {
        "gender": "female",
        "name": 
        {
          "title": "Mrs",
          "first": "Buse",
          "last": "Bayındır"
        },
      "location": {
        "street": {
        "number": 8915,
        "name": "Filistin Cd"
        },
        "city": "Sinop",
        "state": "Adana",
        "country": "Turkey",
        "postcode": 51051,
        "coordinates": {
        "latitude": "69.4187",
        "longitude": "80.9318"
        },
        "timezone": {
        "offset": "-7:00",
        "description": "Mountain Time (US & Canada)"
        }
      },
        "email": "buse.bayindir@example.com",
        "login": {
        "uuid": "1392e9b0-76b1-419c-999a-fb1b0a8f4adc",
        "username": "redzebra772",
        "password": "marriage",
        "salt": "xUheJYZI",
        "md5": "bc59793627fe1b5870bdbc4884b7289b",
        "sha1": "4180e244ade48ea6f386155981694b4aa62fd40d",
        "sha256": "3e591ad79f0d81394e60b51e7b1db398ffa899ae41bde79a560f74e602d16e7b"
      },
      "dob": {
      "date": "1948-12-31T05:54:49.618Z",
      "age": 73
      },
    "registered": {
    "date": "2015-03-02T12:38:04.651Z",
    "age": 6
    },
    "phone": "(659)-268-7932",
    "cell": "(746)-596-6442",
    "id": {
    "name": "",
    "value": null
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/5.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    },
    "nat": "TR"
      },
      {
      "gender": "male",
      "name": {
      "title": "Mr",
      "first": "Oskari",
      "last": "Tuomala"
      },
      "location": {
      "street": {
      "number": 2476,
      "name": "Pirkankatu"
      },
      "city": "Virolahti",
      "state": "Tavastia Proper",
      "country": "Finland",
      "postcode": 33871,
      "coordinates": {
      "latitude": "82.5452",
      "longitude": "-64.6947"
      },
      "timezone": {
      "offset": "+8:00",
      "description": "Beijing, Perth, Singapore, Hong Kong"
      }
      },
      "email": "oskari.tuomala@example.com",
      "login": {
      "uuid": "4c7a8f9a-7736-40be-938f-e4de7d0c6af3",
      "username": "brownwolf445",
      "password": "xxxxxx",
      "salt": "36D1aYzN",
      "md5": "64e876d5153b78fadb143e298f5bad1d",
      "sha1": "cf44dec4853e8fe4b8351ef14d3e94166f8d1fe7",
      "sha256": "6428275aa6611a94506f32649c7942754ab3ac7318def570cc4ad1455c3e7664"
      },
      "dob": {
      "date": "1977-10-16T22:48:01.784Z",
      "age": 44
      },
      "registered": {
      "date": "2011-01-21T21:48:35.706Z",
      "age": 10
      },
      "phone": "06-215-089",
      "cell": "042-227-87-01",
      "id": {
      "name": "HETU",
      "value": "NaNNA175undefined"
      },
      "picture": {
      "large": "https://randomuser.me/api/portraits/men/42.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
      },
      "nat": "FI"
      },
      {
      "gender": "female",
      "name": {
      "title": "Mrs",
      "first": "Becky",
      "last": "Obrien"
      },
      "location": {
      "street": {
      "number": 9056,
      "name": "Main Street"
      },
      "city": "City of London",
      "state": "Suffolk",
      "country": "United Kingdom",
      "postcode": "Y8E 4GW",
      "coordinates": {
      "latitude": "82.8587",
      "longitude": "-41.7922"
      },
      "timezone": {
      "offset": "+3:30",
      "description": "Tehran"
      }
      },
      "email": "becky.obrien@example.com",
      "login": {
      "uuid": "98694380-df43-43cd-8112-b79b2a99e63d",
      "username": "yellowmeercat853",
      "password": "lips",
      "salt": "Jtd5ZWXo",
      "md5": "a19ad167395c349c85628a593135e00e",
      "sha1": "62f3c19f64ffa1d85f3c7584ec9ef06403043d06",
      "sha256": "b1e96032f936542b15635dad68de87980bb2e8b404d441f4d09d07e85d9b6ed8"
      },
      "dob": {
      "date": "1992-07-25T06:32:59.910Z",
      "age": 29
      },
      "registered": {
      "date": "2010-02-01T18:22:32.481Z",
      "age": 11
      },
      "phone": "016974 28888",
      "cell": "0723-533-253",
      "id": {
      "name": "NINO",
      "value": "TM 96 76 49 V"
      },
      "picture": {
      "large": "https://randomuser.me/api/portraits/women/3.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "GB"
      },
    ]
  }

  render() {
    return (
        <div className="container">
          <Header />
          <Body users={this.state.users}/>
        </div>
      );
    }
}

export default App;