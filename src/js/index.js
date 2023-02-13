// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.
 if (process.env.NODE_ENV === 'development') {
   const apiStatus = document.querySelector('#api-status');
  import('../api/browser')
     .then(({ worker }) => worker.start())
     .then(() => fetch('/'))
     .then((res) => res.json())
     .then((res) => (apiStatus.innerText = res.message));
 }

 const music =document.querySelector('#music');
 const ma =document.querySelector('#ma');
 const coding =document.querySelector('#coding');
if(localStorage.getItem("music") != null){
  music.disabled = true;
}
if(localStorage.getItem("ma") != null){
  ma.disabled = true;
}
if(localStorage.getItem("coding") != null){
  coding.disabled = true;
}