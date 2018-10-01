import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';
export const API_REQUEST_ERROR = 'user:';
export const API_REQUEST_SUCCESS = 'user:';
export const API_REQUEST_REQUEST = 'user:';

export function updateUser (newUser) {
  return {
    type: API_REQUEST_SUCCESS,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: API_REQUEST_ERROR,
    payload: {
      user: 'ERROR!!'
    }
  }
}

export function onRequest() {
  return {
    type: API_REQUEST_REQUEST
  }
}

export function apiRequest() {
  return dispatch => {
    dispatch(requestMode());
    $.ajax({
      url: 'http://google.com',
      success(response) {
        console.log('SUCCESS');
        dispatch(updateUser(response.newUser));
      },
      error() {
        console.log('ERROR');
        dispatch(showError());
      }
    });
  }
}
