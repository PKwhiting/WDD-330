/*
- The Fetch API allows you to request resources asynchronously.
- Use the fetch() method to return a promise that resolves to a response object. To get the actual data, call one of the response object's methods. B.text() or json(). These methods resolve to actual data.
- With the status and statusText properties of the Response object you can get the status and status text of the response.
- Use the catch() method or try/catch statement to handle error requests.
- You can upload a file and multiple files using html <input type="file" multiple />
- When fetch promises are resolved, Response instances are returned
- Headers, Request, Response or fetch() on the Window or Worker can be used to check the existence of Fetch API
- Possible guard values: none, request, request-no-cors, response, immutable
- Can you use a GET request to pull multiple strings from URL?
- What is a patch request for?
- Built in form validations vs JS form validation
- html has multiple attributes that can be used to validate and manage validation with different kinds of form fields
- required, minlength, maxlength, min, max, pattern
- Using CSS to show if input is valid or not, better UI
- html pattern using "?" "*" "|"
- min and max can be used to limit certain possible inputs
Constaint Validation API DOM interfaces
HTMLButtonElement (represents a <button> element)
HTMLFieldSetElement (represents a <fieldset> element)
HTMLInputElement (represents an <input> element)
HTMLOutputElement (represents an <output> element)
HTMLSelectElement (represents a <select> element)
HTMLTextAreaElement (represents a <textarea> element)
- Can use validationmessage to return messages regarding form validation
- JS has a ton of different properties and functionalities in regards to validation
- Custom error messages are easy to use
- constraint validation API includes methods to check validity and send messages
*/