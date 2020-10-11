/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
import React, {
  memo,
  useCallback,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// firebase
import getFirebase from '../../firebase.config';

// components
import renderRichText from '../../components/Base/RichText';

// style
import './Landing.module.scss';

let datastore = null;
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonere = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

function Landing({ content }) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidated, setValidated] = useState(false);

  useEffect(() => {
    async function initFirebase() {
      datastore = await getFirebase();
      datastore.analytics().logEvent('user_joined', {
        page: 'landing',
      });
    }
    initFirebase();
  });

  const handleForm = useCallback(() => {
    let error = false;

    if (!phonere.test(String(phone).toLowerCase())) {
      setErrorMessage('Por favor ingresa un número válido');
      error = true;
    }
    if (!re.test(String(email).toLowerCase())) {
      setErrorMessage('Por favor ingresa un correo electrónico válido');
      error = true;
    }
    if (name.length < 2) {
      error = true;
      setErrorMessage('Por favor ingresa un nombre válido');
    }
    return error;
  }, [email, name, phone]);

  const onPress = useCallback((event) => {
    event.preventDefault();
    setValidated(false);

    const error = handleForm();

    if (error) {
      setValidated(true);
    } else {
      datastore.firestore().collection('users').add({
        email: email.toLowerCase(),
        phone,
        name: name.toLowerCase(),
      }).then((docRef) => {
        // console.log('Document written with ID: ', docRef.id);
        datastore.analytics().logEvent('user_registered', {
          page: 'landing',
          id: docRef.id,
        });
      })
        .catch((err) => {
          // console.error('Error adding document: ', err);
        })
        .finally(() => {
          router.push('/');
        });
    }
  }, [email, name, phone]);

  const Content = renderRichText(content);
  return (
    <>
      <section className="landing">
        <div className="landing-content">
          <div className="landing-proposal">
            {Content}
          </div>
          <div className="landing-form">
            <div className="landing-title">
              <h3> <b> ¿Quieres saber mas de Sporte? </b> </h3>
              <h5>
                Déjanos tus datos:
              </h5>
            </div>
            <form className="landing-input">
              {isValidated && (
                <h5 style={{ color: 'red' }}>{errorMessage}</h5>
              )}
              <input onChange={(e) => setName(e.target.value)} className="landing-input_field" type="name" id="name" placeholder="Ingresa tu nombre*" />
              <input onChange={(e) => setEmail(e.target.value)} className="landing-input_field" type="email" id="email" placeholder="Ingresa tu correo electrónico*" />
              <input onChange={(e) => setPhone(e.target.value)} className="landing-input_field" type="phone" id="phone" placeholder="Ingresa tu número telefonico*" />
              <button className="landing-input_button" onClick={onPress}>Unirse</button>
            </form>
          </div>
        </div>
      </section>
      <img
        src="/background-landing.jpg"
        alt="sporte background"
        className="landing-background"
      />
    </>
  );
}

Landing.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default memo(Landing);
