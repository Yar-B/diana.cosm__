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
							<p>Лечебный</p>
							<span>2.100</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Эстетическая косметология</h2>
						<div className='service-row'>
							<p>Классическая чистка лица</p>
							<span>2.500</span>
						</div>
						<div className='service-row'>
							<p>Атравматичная чистка лица</p>
							<span>3.000</span>
						</div>
						<div className='service-row'>
							<p>Неинвазивная карбокситерапия</p>
							<span>2.200</span>
						</div>
						<div className='service-row'>
							<p>Всесезонный пилинг "BioRePeelCl3"</p>
							<span>3.500</span>
						</div>
						<div className='service-row'>
							<p>
								Всесезонный пилинг <span style={{ whiteSpace: 'nowrap' }}>"PRX-T33"</span>
							</p>
							<span>4.000</span>
						</div>
						<div className='service-row'>
							<p>Жёлтый пилинг "Yellow peel"</p>
							<span>3.400</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Инъекционная косметология</h2>
						<div className='service-row'>
							<p>Биоревитализация лица "Novacutan YBio"</p>
							<span>10.500</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация лица "Novacutan SBio"</p>
							<span>10.500</span>
						</div>
						<div className='service-row'>
							<p>
								Коллагенотерапия лица <span style={{ whiteSpace: 'nowrap' }}>"Collost micro"</span>
							</p>
							<span>11.100</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация лица препаратом "PLINEST fast"</p>
							<span>8.500</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация лица "Hyaron"</p>
							<span>3.800</span>
						</div>
						<div className='service-row'>
							<p>
								Ревитализация лица скинбустером{' '}
								<span style={{ whiteSpace: 'nowrap' }}>"Collagen AgeControl+ PDRN"</span>
							</p>
							<span>4.500</span>
						</div>
						<div className='service-row'>
							<p>Биоревитализация губ "Hyaron"</p>
							<span>3.800</span>
						</div>
					</div>

					<div className='price-list-card'>
						<h2>Комплексы</h2>
						<div className='service-row'>
							<p>Очищающий комплекс лица + мультипилинг "ACNON"</p>
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
							<p>Неинвазивная карбокситерапия + пилинг + маска</p>
							<span>2.400</span>
						</div>
						<div className='service-row'>
							<p>Экспресс процедура на выход "Снятие отеков"</p>
							<span>2.400</span>
						</div>
						<div className='service-row'>
							<p>Разбор и подбор домашнего ухода</p>
							<span>1.500</span>
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
