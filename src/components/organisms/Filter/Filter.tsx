import { useDispatch, useSelector } from 'react-redux'
import { setPurpose } from 'store/slices/filterSlice'
// import { FilterProps } from './Filter.props'
import styles from './Filter.module.scss'

export const Filter = () => {
    
	const dispatch = useDispatch()


	return (
		<div className={styles.wrapper}>
			<input type='text' onChange={(event) =>  dispatch(setPurpose(event.target.value))} />
		</div>
	)
}
