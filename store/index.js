import Vuex from "vuex";
import {
  resolve
} from "url";

const store = () => {
  return new Vuex.Store({
    state: {
      count: 0,
      firstName: "",
      lastName: "",
      email: "",
      ssn: "",
      phoneNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state1: "",
      zip: ""
    },
    getters: {
      firstName(state) {
        return state.firstName;
      },
      lastName(state) {
        return state.lastName;
      },
      email(state) {
        return state.email;
      },
      ssn(state) {
        return state.ssn;
      },
      phoneNumber(state) {
        return state.phoneNumber;
      },
      addressLine1(state) {
        return state.addressLine1;
      },
      addressLine2(state) {
        return state.addressLine2;
      },
      city(state) {
        return state.city;
      },
      state1(state) {
        return state.state1;
      },
      zip(state) {
        return state.zip;
      }
    },
    mutations: {
      updateFirstName(state, firstName) {
        state.firstName = firstName;
      },
      updateCount(state, increment) {
        state.count += increment;
      },
      updateLastName(state, lastName) {
        state.lastName = lastName;
      },
      updateEmail(state, email) {
        state.email = email;
      },
      updateSSN(state, ssn) {
        state.ssn = ssn;
      },
      updatePhoneNumber(state, phoneNumber) {
        state.phoneNumber = phoneNumber;
      },
      updateAddressLine1(state, addressLine1) {
        state.addressLine1 = addressLine1;
      },
      updateAddressLine2(state, addressLine2) {
        state.addressLine2 = addressLine2;
      },
      updateCity(state, city) {
        state.city = city;
      },
      updateState(state, state1) {
        state.state1 = state1;
      },
      updateZip(state, zip) {
        state.zip = zip;
      }
    },
    actions: {
      signInWithFacebook({
        commit
      }) {
        console.log("actions signInWithFacebook");
        return new Promise((resolve, reject) => {
          // auth.signInWithPopup(new firebase.auth.FacebookAuthprovider());

          var provider = new firebase.auth.FacebookAuthProvider();

          provider.addScope("user_birthday");

          firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (authData) {
              console.log("authData >> ", authData);
            })
            .catch(function (error) {
              console.log("error >> ", error);
            });

          resolve(); //
        });
      }
    }
  });
};

export default store;
