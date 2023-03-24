import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <h2 style={{fontWeight: '500', textAlign: 'center'}}>
        MY JOURNEY OF
        <span style={{color: 'blue', textAlign: 'center'}}> CCBP 4.0</span>
      </h2>

      <div style={{width: '100%', height: '500px'}}>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
          mediaSettings={{align: 'left', fit: 'cover'}}
        >
          {timelineItemsList.map(each =>
            each.categoryId === 'COURSE' ? (
              <CourseTimelineCard courseDetails={each} key={each.id} />
            ) : (
              <ProjectTimelineCard projectDetails={each} key={each.id} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
