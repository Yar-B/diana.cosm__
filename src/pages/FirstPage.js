function FirstPage() {
	function goToContacts() {
		console.log('first')
		window.location.href = '#contacts'
	}

	return (
		<>
			<div className='page-wrapper'>
				<div className='first-page-bg'>
					<div className='first-page'>
						<div className='first-page-title'>
							<div className='title'>
								<p>ТВОЙ</p>
								<p>КОСМЕТОЛОГ</p>
							</div>
							<div className='description'>
								<p>Мастер эстетической и инъекционной косметологии - Диана</p>
							</div>
							<button onClick={() => goToContacts()} className='button'>
								Связаться
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FirstPage

