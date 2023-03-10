import { Form, redirect, useActionData } from "react-router-dom";

// request param contains all the form data from the FE
export const contactSubmit = async ({ request }) => {
  console.log(request);
  
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission);

  if(submission.message.length < 10) {
    return { error: 'message must be 10 chars long'};
  }

  return redirect('/');
}

export default function Contact() {

  // get the value being returned from contactSubmit
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* find the func() associated with this route 
      React router will refer to the Route component */}
      <Form method='post' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        { data && data.error && <p>{ data.error }</p>}
      </Form>
    </div>
  )
}