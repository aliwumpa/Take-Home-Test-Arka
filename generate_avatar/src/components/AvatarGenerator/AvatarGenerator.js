import React, { useState } from 'react';
import axios from 'axios';
import './AvatarGenerator.css';

const AvatarGenerator = () => {
	const [inputText, setInputText] = useState('');
	const [avatarUrl, setAvatarUrl] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

	const generateAvatar = async () => {
        if (inputText === '') {
            setErrorMsg('Input field must not be empty!');
            return;
        }

        try {
            const response = await axios.get(`https://robohash.org/${inputText}`, {
                responseType: 'blob' // Tell Axios to expect blob data
            });
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarUrl(reader.result); // Set base64-encoded image data
                setErrorMsg(''); // Clear error message if avatar is successfully generated
            };
            reader.readAsDataURL(response.data); // Convert blob to base64

            setErrorMsg('');
        } catch (error) {
            setErrorMsg('Error fetching avatar');
            console.error('Error fetching avatar:', error);
        }
	};

	return (
		<div className='avatar__wrapper'>
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder="Ketik nama Anda..."
			/>
			<button onClick={generateAvatar}>Buat Profil Picture!</button>
            <div className='avatar__wrapper-img-wrapper'>
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
                {avatarUrl && inputText !== '' && <img src={avatarUrl} alt="Avatar" />}
            </div>
		</div>
	);
};

export default AvatarGenerator;