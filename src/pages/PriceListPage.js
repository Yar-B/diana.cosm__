function PriceListPage() {
	return (
		<>
			<div className='price-list-page-wrapper'>
				<div className='price-list-page'>
					<div className='title'>ПРАЙС-ЛИСТ</div>
					<div className='price-list-card'>
						<h2>Массаж лица</h2>
						<div className='service-row'>
							<p>Классический</p>
							<span>1500</span>
						</div>
						<div className='service-row'>
							<p>Пластический</p>
							<span>2100</span>
						</div>
						<div className='service-row'>
							<p>Лечебный по Жаке</p>
							<span>2100</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Эстетическая косметология</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица (чистка)</p>
							<span>2300</span>
						</div>
						<div className='service-row'>
							<p>Неинвазивная карбокситерапия</p>
							<span>1800</span>
						</div>
						<div className='service-row'>
							<p>Всесезонный пилинг "BioRePeelCl3"</p>
							<span>3500</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Инъекционная косметология</h2>
						<div className='service-row'>
							<p>Биоревитализация "Hyaron"</p>
							<span>4000</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Комплексы</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "ACNON"</p>
							<span>2500</span>
						</div>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "BioRePeelCl3"</p>
							<span>4500</span>
						</div>
						{/* <div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "PRX-T33"</p>
							<span>4500</span>
						</div> */}
						<div className='service-row'>
							<p>Классический массаж лица + альгинатная маска</p>
							<span>1700</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход за жирной кожей лица + дарсонваль</p>
							<span>2100</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход лица + альгинатная маска</p>
							<span>2100</span>
						</div>
					</div>
					<div className='bottom-row'>
						<p>Первичная консультация входит в стоимость процедур</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default PriceListPage

