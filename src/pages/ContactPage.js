import tgIcon from '../assets/social-media-icons/tg.png'
import waIcon from '../assets/social-media-icons/wa.png'
import instIcon from '../assets/social-media-icons/inst.png'
import vkIcon from '../assets/social-media-icons/vk.png'
import phoneIcon from '../assets/social-media-icons/phone.png'
import rightArrow from '../assets/arrow-right.png'

function ContactPage() {
	return (
		<>
			<div className='page-wrapper'>
				<div id='contacts' className='contact-page'>
					<a href='#contacts' aria-hidden='true' className='title'>
						КОНТАКТЫ
					</a>
					<div className='content'>
						<div
							className='social-media-item'
							onClick={() => document.location.replace('https://t.me/DIANA_ROMANOVNA_T')}
						>
							<div className='display-flex'>
								<img src={tgIcon} className='social-media-icon' />
								<div className='social-media-title'>Telegram</div>
							</div>
							<img src={rightArrow} style={{ width: 10 }} />
						</div>
						<div className='social-media-item' onClick={() => document.location.replace('https://wa.me/89966218255')}>
							<div className='display-flex'>
								<img src={waIcon} className='social-media-icon' />
								<div className='social-media-title'>WhatsApp</div>
							</div>
							<img src={rightArrow} style={{ width: 10 }} />
						</div>
						<div
							className='social-media-item'
							onClick={() => document.location.replace('https://www.instagram.com/diana.cosm__')}
						>
							<div className='display-flex'>
								<img src={instIcon} className='social-media-icon' />
								<div className='social-media-title'>Instagram</div>
							</div>
							<img src={rightArrow} style={{ width: 10 }} />
						</div>
						<div
							className='social-media-item'
							onClick={() => document.location.replace('https://vk.com/t.d_romanovna')}
						>
							<div className='display-flex'>
								<img src={vkIcon} className='social-media-icon' />
								<div className='social-media-title'>VK</div>
							</div>
							<img src={rightArrow} style={{ width: 10 }} />
						</div>
						<a className='social-media-item' href='tel:+79966218255' style={{ textDecoration: 'none' }}>
							<div className='display-flex'>
								<img src={phoneIcon} className='social-media-icon' />
								<div className='social-media-title'>+7 (996) 621-82-55</div>
							</div>
							<img src={rightArrow} style={{ width: 10 }} />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactPage

