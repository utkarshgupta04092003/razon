export const follow = (id, storedToken) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + storedToken);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://localhost:8080/api/v1/users/followUser/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error))
};

export const unFollow = (id, storedToken) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + storedToken);
  
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(
      `http://localhost:8080/api/v1/users/unFollowUser/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };