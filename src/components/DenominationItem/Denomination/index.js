import './index.css'
const Denomination=props=>{
    const {denominationDetails,updateBalance}=this.props
    const {value}=denominationDetails
    const onClickDenomination=()=>{
        updateBalance(value)
    }

    return (
        <li className="denomination-item">
            <button type="button"
            className="denomination-button"
            onClick={onClickDenomination}>{value}</button>

        </li>
    )

}
export default Denomination;