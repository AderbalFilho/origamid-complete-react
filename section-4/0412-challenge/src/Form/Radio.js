import React from 'react';

const Radio = ({ pergunta, options, onChange, id, value, active }) => {
  return (
    active && (
      <fieldset
        style={{
          padding: '2rem',
          marginBottom: '1rem',
          border: '2px solid #eee',
        }}
      >
        <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
        {options.map((option) => (
          <label
            key={option}
            style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
          >
            <input
              type="radio"
              id={id}
              checked={option === value}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    )
  );
};

export default Radio;
