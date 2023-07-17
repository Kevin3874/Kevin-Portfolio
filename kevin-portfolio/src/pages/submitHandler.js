import { toast } from 'react-toastify';

const handleFormSubmit = async (event, setFormErrors) => {
  event.preventDefault();
  if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
    setFormErrors({
      name: !event.target.name.value,
      email: !event.target.email.value,
      message: !event.target.message.value,
    });
    return;
  }

  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.email.value,
      message: event.target.message.value,
      subject: `Portfolio Contact - ${event.target.name.value}`,
    }),
  });

  const data = await response.json();

  if (data.success) {
    toast.success('Email has been sent! I will get back to you as soon as possible!', { position: toast.POSITION.TOP_RIGHT });
  } else {
    toast.error('Email could not be sent. Please try again later.', { position: toast.POSITION.TOP_RIGHT });
  }
};

export default handleFormSubmit;
