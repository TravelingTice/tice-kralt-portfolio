const ContactInput = props => (
  <div className="form-group">
      <label htmlFor={props.id}>
				<i className={`fas fa-${props.icon} ${props.iconClass}`}></i>
			</label>
      {props.type === 'textarea' ? (
				<textarea name={props.name} id={props.id} cols="30" rows="10"></textarea>
      ) : (
        <input type={props.type || 'text'} className="form-control" id={props.id}/>
      )}
  </div>
);


export default ContactInput;