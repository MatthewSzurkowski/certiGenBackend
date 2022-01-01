# CertiGen
<p align="center">
  <img src="https://i.imgur.com/my2aGQ9.png" alt="certiGen Banner">
</p>

# Installation & API

### Installation
<hr/>

1. Clone this repository.
2. Install npm packages using `./getPacks.sh` (if this doesn't work, use <code>chmod +x getPacks.sh</code> and then <code>./getPacks.sh</code>)
3. Run the server. `npm run devStart`
4. Server starts running at port: 5000 and React page on port: 3000
6. Go to Browser and run `localhost:5000`. You will see the usage of API and Help on your browser.

### Usage

1. Enter the name of the event
2. Enter the name of the ambassador running the event
3. Enter the participants names (seperated by commas)

### API
<hr/>
<ul><li><b>GET '/'</b> : This is a Help Route</li> <li><b>POST '/sendData'</b> : One and only Route for Certificate Generation. Below is the description of what you should send as Raw JSON with this POST Request. <br/><ul><li>{<br/> &nbsp; <b>event_name</b>:"Name of The Event",<br/>&nbsp; <b> ambassador_name</b>: "Name of the Ambassador",<br/>&nbsp; <b>participants</b>:["Person 1","Person 2","Person 3","Person 4"]<br/>}</li><ul></li></ul><li> After Successful generation of certificates you will receive response as <b>Success</b> and all certificates will be in folder named <b>certificates</b></li>
