import styles from './Select.module.css'

function Select({ text, name, options, handleOnchange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name}
                id={name}
                onChange={handleOnchange}
                value={value || ''}>
                <options>Selecione uma opção</options>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select