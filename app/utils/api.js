import { API_ENDPOINT_URL as BASE_URL } from '../constants/defaults';

const USER_PATH = '/api/users';

export default class ApiEndpoint {
  getBasePath = () => `${BASE_URL}`;

  getUserByIdPath = id => `${BASE_URL}${USER_PATH}/${id}`;

  getUserListPath = (pageNum, perPage) =>
    `${BASE_URL}${USER_PATH}?page=${pageNum}&per_page=${perPage}`;
}
