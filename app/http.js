function Http() {}

Http.prototype.get = async (url) => {
  const response = await fetch(url);
  const resData = await response.json();

  return resData;
};

Http.prototype.post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const resData = await response.json();

  return resData;
};

Http.prototype.put = async (url, data) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const resData = await response.json();

  return resData;
};

Http.prototype.delete = async (url) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const resData = await 'Resource deleted.';

  return resData;
};

export const http = new Http();
