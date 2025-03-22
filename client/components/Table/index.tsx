import styles from './table.module.scss'

export type TableData = Array<{id: string, key: string, value: number | string}>

const Table = ({data}: {data: TableData}) => {
    return (
        <table className={styles.table}>
			<tbody>
				{data.map(row => (
					<tr key={row.id}>
						<td>{row.key}</td>
						<td>{row.value}</td>
					</tr>
				))}
			</tbody>
        </table>
    )
}

export default Table