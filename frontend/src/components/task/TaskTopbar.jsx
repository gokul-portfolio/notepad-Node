import { Dropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    BsFilterSquare,
    BsExclamationCircle,
    BsLightningCharge,
    BsArrowDownCircle,
} from "react-icons/bs";
import {
    FaPlusCircle,
    FaSearch,
    FaCalendarAlt,
    FaSort,
} from "react-icons/fa";

const TaskTopbar = ({
    search,
    setSearch,
    priority,
    setPriority,
}) => {
    return (
        <div className="top-bar-task d-flex flex-wrap justify-content-between align-items-center gap-2">

            {/* LEFT CONTROLS */}
            <div className="left-controls d-flex flex-wrap align-items-center gap-2">

                {/* SEARCH */}
                <div className="search-wrapper d-flex align-items-center gap-2">
                    <FaSearch />
                    <Form.Control
                        type="text"
                        placeholder="Search tasks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* PRIORITY FILTER */}
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        <BsFilterSquare /> Priority
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setPriority("all")}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setPriority("High")}>
                            <BsExclamationCircle /> High
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setPriority("Medium")}>
                            <BsLightningCharge /> Medium
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setPriority("Low")}>
                            <BsArrowDownCircle /> Low
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* DATE FILTER (UI only) */}
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        <FaCalendarAlt /> This Week
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Today</Dropdown.Item>
                        <Dropdown.Item>This Week</Dropdown.Item>
                        <Dropdown.Item>This Month</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* RIGHT CONTROLS */}
            <div className="right-controls d-flex gap-2 align-items-center flex-wrap">
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        <FaSort /> Sort By
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Priority</Dropdown.Item>
                        <Dropdown.Item>Deadline</Dropdown.Item>
                        <Dropdown.Item>Created Date</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Button
                    as={Link}
                    to="/createtask"
                    variant="primary"
                    className="d-flex align-items-center gap-1"
                >
                    <FaPlusCircle /> Add Task
                </Button>
            </div>
        </div>
    );
};

export default TaskTopbar;
