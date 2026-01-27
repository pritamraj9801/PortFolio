export default function SectionHeader(props){
    return <div className="section-header">
        <h4>
            <span className="hashMark">#</span>
            <span className="secionName">
            {props.sectionName}
            </span>
            <span className="sectionMarkLine"></span>
        </h4>
    </div>
}