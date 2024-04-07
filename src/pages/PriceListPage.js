function PriceListPage() {
	return (
		<>
			<div className='price-list-page-wrapper'>
				<div className='price-list-page'>
					<div className='title'>PRICE LIST</div>
					<div className='price-list-card'>
						<h2>Комплексы</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг</p>
							<span>3500/3700</span>
						</div>
						<div className='service-row'>
							<p>Классический массаж лица + альгинатная маска</p>
							<span>2600</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход за жирной кожей лица + дарсонваль</p>
							<span>3200</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход лица + альгинатная маска</p>
							<span>3000</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Массаж лица</h2>
						<div className='service-row'>
							<p>Классический</p>
							<span>2400</span>
						</div>
						<div className='service-row'>
							<p>Пластический</p>
							<span>2800</span>
						</div>
						<div className='service-row'>
							<p>Лечебный по Жаке</p>
							<span>2800</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Эстетическая косметология</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица (чистка)</p>
							<span>3300</span>
						</div>
						<div className='service-row'>
							<p>Неинвазивная карбокситерапия</p>
							<span>2700</span>
						</div>
						<div className='service-row'>
							<p>Всесезонный пилинг "PRC Finistere"</p>
							<span>2800</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Инъекционная косметология</h2>
						<div className='service-row'>
							<p>Биоревитализация "Hyaron"</p>
							<span>4000</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PriceListPage

