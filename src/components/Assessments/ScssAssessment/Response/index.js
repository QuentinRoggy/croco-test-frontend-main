import './style.scss';

function Response() {
  return (
    <div className='main_container'>

      <div className='row first_row'>
        <div className='col center first_row__first_col'><p>john</p></div>
        <div className='col bottom-right first_row__second_col'>doe</div>
        <div className='col center first_row__third_col'>john</div>
      </div>

      <div className='row second_row'>
      <div className='col second_row__first_col' />
        <div className='col bottom-right second_row__second_col'>doe</div>
      </div>


      <div className='row third_row'>
        <div className='col bottom-right third_row__first_col'>doe</div>
        <div className='col center third_row__second_col'>john</div>
      </div>
    </div>
  );
}

Response.propTypes = {

};

export default Response;
