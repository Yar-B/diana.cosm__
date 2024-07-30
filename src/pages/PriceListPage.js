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
							<span>1.500</span>
						</div>
						<div className='service-row'>
							<p>Пластический</p>
							<span>2.100</span>
						</div>
						<div className='service-row'>
							<p>Лечебный по Жаке</p>
							<span>2.100</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Эстетическая косметология</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица (чистка)</p>
							<span>2.300</span>
						</div>
						<div className='service-row'>
							<p>Неинвазивная карбокситерапия</p>
							<span>1.800</span>
						</div>
						<div className='service-row'>
							<p>Всесезонный пилинг "BioRePeelCl3"</p>
							<span>3.500</span>
						</div>
						<div className='service-row'>
							<p>
								Всесезонный пилинг <span style={{ whiteSpace: 'nowrap' }}>"PRX-T33"</span>
							</p>
							<span>4000</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Инъекционная косметология</h2>
						<div className='service-row'>
							<p>Биоревитализация лица препаратом "PLINEST fast"</p>
							<span>8.500</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация "Hyaron"</p>
							<span>4.000</span>
						</div>
						<div className='service-row'>
							<p>Ревитализация лица скинбустером "Collagen AgeControl+ PDRN"</p>
							<span>4.500</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация губ "Hyaron"</p>
							<span>4.000</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Комплексы</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "ACNON"</p>
							<span>3.000</span>
						</div>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "BioRePeelCl3"</p>
							<span>4.000</span>
						</div>
						<div className='service-row'>
							<p>Очищающий комплекс лица + пилинг "PRX-T33"</p>
							<span>4.500</span>
						</div>
						<div className='service-row'>
							<p>Классический массаж лица + альгинатная маска</p>
							<span>1.700</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход за жирной кожей лица + дарсонваль</p>
							<span>2.100</span>
						</div>
						<div className='service-row'>
							<p>Профессиональный уход лица + альгинатная маска</p>
							<span>2.100</span>
						</div>
					</div>
					<div className='bottom-row'>
						<p>Первичная консультация входит в стоимость процедур</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default PriceListPage;

