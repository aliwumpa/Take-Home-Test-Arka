import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = () => {
	const [selectedOption, setSelectedOption] = useState('');
    const [checkChange, setCheckChange] = useState(false);

	const optionsJenjang = [
        'Pendidikan Pra Sekolah',
        'Pendidikan Dasar',
        'Pendidikan Menengah',
        'Pendidikan Tinggi'
    ];

	const optionsTingkatan = {
		'Pendidikan Pra Sekolah': [
            'PAUD (Pendidikan Anak Usia Dini)',
            'TK (Taman Kanak-kanak)',
            'RA (Raudhatul Athfal)'
        ],
		'Pendidikan Dasar': [
            'SD (Sekolah Dasar)',
            'MI (Madrasah Ibtidaiyah)',
            'SMP (Sekolah Menengah Pertama)',
            'MTs (Madrasah Tsanawiyah)'
        ],
		'Pendidikan Menengah': [
            'SMA (Sekolah Menengah Atas)', 
            'MA (Madrasah Aliyah)',
            'SMK (Sekolah Menengah Kejuruan)'
        ],
        'Pendidikan Tinggi': [
            'D3 Diploma',
            'S1/D4 Sarjana',
            'S2 Magister',
            'S3 Doktoral'
        ]
	};

	const handleDropdownChange = (e) => {
		setSelectedOption(e.target.value);
        if (e.target.value === '') {
            setCheckChange(false);
        } else {
            setCheckChange(true);
        }
	};

    return (
        <div className='dropdown__wrapper'>
            <div className='jenjang__wrapper'>
                <select value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">Pilih jenjang</option>
                    {optionsJenjang.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className='tingkatan__wrapper'>
                <select>
                    {checkChange ? (
                        <option value="">Pilih tingkatan</option>
                    ): (
                        <option value="">Pilih jenjangnya dulu!</option>
                    )}
                    {selectedOption && (
                        <option value="selected jenjang" disabled>{ selectedOption }</option>
                    )}
                    {selectedOption && optionsTingkatan[selectedOption].map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Dropdown