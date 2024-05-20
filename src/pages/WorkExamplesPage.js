import { useState } from 'react'
import work1 from '../assets/work-examples/work-example1.JPG'
import work2 from '../assets/work-examples/work-example2.JPG'
import work3 from '../assets/work-examples/work-example3.JPG'
import work4 from '../assets/work-examples/work-example4.JPG'
import work5 from '../assets/work-examples/work-example5.JPG'
import work6 from '../assets/work-examples/work-example6.JPG'
import work7 from '../assets/work-examples/work-example7.JPG'
import work8 from '../assets/work-examples/work-example8.JPG'
import rightArrow from '../assets/arrow-right.png'
import leftArrow from '../assets/arrow-left.png'

const photoArr = [work1, work3, work4, work5, work6, work7, work8]

function WorkExamplesPage() {
	const [index, setIndex] = useState(0)

	function prevPhoto() {
		setIndex(index - 1 < 0 ? photoArr.length - 1 : index - 1)
	}
	function nextPhoto() {
		setIndex(index + 1 > photoArr.length - 1 ? 0 : index + 1)
	}

	return (
		<>
			<div className='page-wrapper' style={{ height: 'fit-content' }}>
				<div className='work-examples-page'>
					<div className='title'>Портфолио</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							width: '100%'
						}}
					>
						<div className='gallery-wrapper'>
							{photoArr.map((o, i) => {
								return (
									<img
										key={i}
										style={{
											position: 'absolute',
											top: 0,
											left: 0,
											opacity: i === index ? '1' : '0',
											width: '100%',
											transition: '0.5s'
										}}
										src={o}
									/>
								)
							})}
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							{photoArr.map((_, i) => {
								return (
									<span
										key={i}
										style={{
											border: '1px solid #727881',
											borderRadius: '10px',
											backgroundColor: i === index ? '#ff0480' : '#727881',
											marginRight: '10px',
											width: '10px',
											height: '10px',
											transition: '0.5s'
										}}
										onClick={() => setIndex(i)}
									></span>
								)
							})}
						</div>
					</div>
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'space-evenly'
						}}
					>
						<div className='photo-slide-button-wrapper'>
							<span className='photo-slide-button left' onClick={prevPhoto}>
								<img src={leftArrow} style={{ width: 10 }} />
							</span>
						</div>
						<div className='photo-slide-button-wrapper' style={{ justifyContent: 'flex-end' }}>
							<span className='photo-slide-button right' onClick={nextPhoto}>
								<img src={rightArrow} style={{ width: 10 }} />
							</span>
						</div>
					</div>
					{/* <div className='more-works-button'>
						<span>еще больше работ</span>
						<img src={rightArrow} style={{ width: 10 }} />
					</div> */}
				</div>
			</div>
		</>
	)
}

export default WorkExamplesPage

