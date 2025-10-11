import React, { useEffect, useRef, useState } from "react";
// import{from "./animated_flowchart.module.scss";
// import onboard_app from "./images/onboard_app.png";
// import pentestgenix from "./images/pentestgenix.png";
// import customer_access from "./images/customer_access.png";
// import separator from "./images/separator.png";
// import dev_team from "./images/dev_team.png";
// import jira from "./images/jira.png";
// import final_report from "./images/final_report.png";
// import pentesting_team from "./images/pentesting_team.png";
// import click from "./images/click.png";

const AnimatedFlowchart = () => {
    const svgRef = useRef(null);
    const [polylinePoints1, setPolylinePoints1] = useState("");
    const [
        polylinePointsPentestgenixToJira,
        setPolylinePointsPentestgenixToJira,
    ] = useState("");
    const [polylinePoints2, setPolylinePoints2] = useState("");
    const [polylinePoints3, setPolylinePoints3] = useState("");
    const [polylinePoints5_a, setPolylinePoints5_a] = useState("");
    const [polylineDashed, setPolylineDashed] = useState("");

    useEffect(() => {
        const svgElement = svgRef.current;
        const paths = [
            svgElement.getElementById("path1"),
            svgElement.getElementById("path2"),
            svgElement.getElementById("path3"),
            svgElement.getElementById("path4"),
            svgElement.getElementById("path5"),
        ];
        const paths_pentestgenix_to_jira = [
            svgElement.getElementById("path1"),
            svgElement.getElementById("path2"),
            svgElement.getElementById("path3"),
            svgElement.getElementById("path4_a"),
        ];

        const leftSidePentestPath =
            svgElement.getElementById("left_side_pentest");
        const rightSidePentestPath =
            svgElement.getElementById("right_side_pentest");
        const dashedPentestPath = svgElement.getElementById("path5_a");
        const clickToDevTeamPath = svgElement.getElementById("path_dashed");

        let currentPathIndex = 0;
        let currentPathIndexPentestgenixToJira = 0;
        let progress1 = 0;
        let progress_pentestgenix_to_jira = 0;
        let progress2 = 0;
        let progress3 = 0;
        let progress5_a = 0;
        let progressDashed = 0;

        const speed = 2;
        const maxPoints = 20;

        const animatePolyline1 = () => {
            const path = paths[currentPathIndex];
            const pathLength = path.getTotalLength();
            progress1 += speed;
            if (progress1 > pathLength + maxPoints * 2) {
                progress1 = 0;
                currentPathIndex = (currentPathIndex + 1) % paths.length;
                setPolylinePoints1("");
            } else {
                const point = path.getPointAtLength(progress1);
                updatePolyline1(point);
            }
            requestAnimationFrame(animatePolyline1);
        };

        const animatePolylinePentestgenixToJira = () => {
            const path =
                paths_pentestgenix_to_jira[currentPathIndexPentestgenixToJira];
            const pathLength = path.getTotalLength();
            progress_pentestgenix_to_jira += speed;
            if (progress_pentestgenix_to_jira > pathLength + maxPoints * 2) {
                progress_pentestgenix_to_jira = 0;
                currentPathIndexPentestgenixToJira =
                    (currentPathIndexPentestgenixToJira + 1) %
                    paths_pentestgenix_to_jira.length;
                setPolylinePointsPentestgenixToJira("");
            } else {
                const point = path.getPointAtLength(
                    progress_pentestgenix_to_jira
                );
                updatePolylinePentestgenixToJira(point);
            }
            requestAnimationFrame(animatePolylinePentestgenixToJira);
        };

        const animatePolyline2 = () => {
            const pathLength = leftSidePentestPath.getTotalLength();
            progress2 += speed;
            if (progress2 > pathLength + maxPoints * 2) {
                progress2 = 0;
                setPolylinePoints2("");
            } else {
                const point = leftSidePentestPath.getPointAtLength(progress2);
                updatePolyline2(point);
            }
            requestAnimationFrame(animatePolyline2);
        };

        const animatePolyline3 = () => {
            const pathLength = rightSidePentestPath.getTotalLength();
            progress3 += speed;
            if (progress3 > pathLength + maxPoints * 2) {
                progress3 = 0;
                setPolylinePoints3("");
            } else {
                const point = rightSidePentestPath.getPointAtLength(progress3);
                updatePolyline3(point);
            }
            requestAnimationFrame(animatePolyline3);
        };

        const animatePolyline5_a = () => {
            const pathLength = dashedPentestPath.getTotalLength();
            progress5_a += speed;
            if (progress5_a > pathLength + maxPoints * 2) {
                progress5_a = 0;
                setPolylinePoints5_a("");
            } else {
                const point = dashedPentestPath.getPointAtLength(progress5_a);
                updatePolyline5_a(point);
            }
            requestAnimationFrame(animatePolyline5_a);
        };

        const animatePolylineDashed = () => {
            const pathLength = clickToDevTeamPath.getTotalLength();
            progressDashed += speed;
            if (progressDashed > pathLength + maxPoints * 2) {
                progressDashed = 0;
                setPolylineDashed("");
            } else {
                const point =
                    clickToDevTeamPath.getPointAtLength(progressDashed);
                updatePolylineDashed(point);
            }
            requestAnimationFrame(animatePolylineDashed);
        };

        const updatePolyline1 = (point) => {
            setPolylinePoints1((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        const updatePolylinePentestgenixToJira = (point) => {
            setPolylinePointsPentestgenixToJira((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        const updatePolyline2 = (point) => {
            setPolylinePoints2((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        const updatePolyline3 = (point) => {
            setPolylinePoints3((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        const updatePolyline5_a = (point) => {
            setPolylinePoints5_a((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        const updatePolylineDashed = (point) => {
            setPolylineDashed((prevPoints) => {
                let points = prevPoints ? prevPoints.trim().split(" ") : [];
                points.push(`${point.x},${point.y}`);
                if (points.length > maxPoints) {
                    points.shift();
                }
                return points.join(" ");
            });
        };

        animatePolyline1();
        animatePolylinePentestgenixToJira();
        animatePolyline2();
        animatePolyline3();
        animatePolyline5_a();
        animatePolylineDashed();
    }, []);

    return (
        <div className="flowcontainer">
            <div className="main">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {/* Alleviate Your Pentesting Experience */}
                    {/* Elevate Your Pentest & Vulnerability Management Experience
                    With Pentestgenix® Platform. */}
                    How GIT <span className="text-primary">Work!</span>
                </h2>
                <section data-aos="fade-up">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        width="1200"
                        zoomAndPan="magnify"
                        viewBox="0 0 1339.5 564"
                        height="500"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                        className="svg"
                        ref={svgRef}
                    >
                        <rect width="100%" height="100%" fill="#0b111e" />

                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="10"
                                refX="0"
                                refY="3"
                                orient="auto"
                                fill="#464f69"
                            >
                                <path d="M 0 0 L 10 3 L 0 6 z" />
                            </marker>
                        </defs>

                        <marker
                            id="arrow"
                            markerWidth="10"
                            markerHeight="10"
                            refX="0"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path d="M0,0 L0,6 L9,3 z" fill="#464f69" />
                        </marker>

                        {/* images */}
                        <>
                            <image
                                // href={onboard_app}
                                x="50"
                                y="250"
                                width="152"
                                height="57"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={pentestgenix}
                                x="300"
                                y="250"
                                width="226"
                                height="66"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={pentesting_team}
                                x="300"
                                y="450"
                                width="226"
                                height="66"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={customer_access}
                                x="300"
                                y="100"
                                width="226"
                                height="66"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={separator}
                                x="570"
                                y="110"
                                width="40"
                                height="40"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={dev_team}
                                x="700"
                                y="50"
                                width="169"
                                height="64"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={jira}
                                x="700"
                                y="140"
                                width="169"
                                height="64"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={final_report}
                                x="1100"
                                y="250"
                                width="169"
                                height="64"
                                preserveAspectRatio="none"
                            />

                            <image
                                // href={click}
                                x="650"
                                y="435"
                                width="50"
                                height="50"
                                preserveAspectRatio="none"
                            />
                        </>

                        {/* paths */}
                        <>
                            <path
                                id="path1"
                                d="M 200 280 L 280 280"
                                stroke="#464f69"
                                strokeWidth="2"
                                markerEnd="url(#arrow)"
                            />

                            {/* pentestgenix -> customer access */}
                            <path
                                id="path2"
                                d="M 420 250 L 420 185"
                                stroke="#464f69"
                                strokeWidth="2"
                                markerEnd="url(#arrow)"
                            />

                            {/* customer access -> separator */}
                            <path
                                id="path3"
                                d="M 525 131 L 570 131"
                                stroke="#464f69"
                                strokeWidth="2"
                            />

                            {/* separator to dev team */}
                            <path
                                id="path4"
                                d="M 590 110 L 590 95 Q 590 85 600 85 L 683 85"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />

                            {/* separator to jira */}
                            <path
                                id="path4_a"
                                d="M 590 149 L 590 165 Q 590 175 600 175 L 683 175"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />

                            {/* dev team top dotted half */}
                            <path
                                id="path5"
                                d="M 900 85 L 970 85 Q 985 85 985 100 L 985 285 L 1100 285"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="10, 10"
                            />

                            {/* dev team bottom dotted half */}
                            <path
                                id="path5_a"
                                d="M 900 485 L 970 485 Q 985 485 985 470 L 985 285 L 1075 285"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="10, 10"
                                markerEnd="url(#arrow)"
                            />

                            {/* one click to dev team dotted */}
                            <path
                                id="path_dashed"
                                d="M 900 485 L 970 485 Q 985 485 985 470 L 985 100 Q 985 85 970 85 L 900 85"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="10, 10"
                                markerEnd="url(#arrow)"
                            />

                            {/* dotted half to final report */}
                            <path
                                id="path6"
                                d="M 985 285 L 1075 285"
                                // stroke="#464f69"
                                strokeWidth="3"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />

                            {/* left side - pentesting team to pentestgenix */}
                            <path
                                id="left_side_pentest"
                                d="M 300 485 L 265 485 Q 250 485 250 470 L 250 295 Q 250 280 265 280 L 280 280"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />

                            {/* right side - pentesting team to pentestgenix */}
                            <path
                                id="right_side_pentest"
                                d="M 525 485 L 560 485 Q 575 485 575 470 L 575 295 Q 575 280 560 280 L 545 280"
                                stroke="#464f69"
                                strokeWidth="2"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />
                        </>

                        {/* texts */}
                        <>
                            <text
                                x="200"
                                y="130"
                                fontSize={16}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                
                            >
                                <tspan dx="0" dy="0">
                                    Visibility from day 1
                                </tspan>
                            </text>

                            <text
                                x="420"
                                y="360"
                                fontSize={16}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan x="420" dy="0">
                                    Continuous Testing and
                                </tspan>
                                <tspan x="420" dy="30">
                                    upload of Vulnerabilities
                                </tspan>
                            </text>

                            <text
                                x="800"
                                y="470"
                                fontSize={16}
                                fontWeight="bold"
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan dx="0" dy="0">
                                    One click revalidation
                                </tspan>
                            </text>

                            <text
                                x="755"
                                y="500"
                                fontSize={16}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan dx="0" dy="0">
                                    Anytime within 180 days of testing
                                </tspan>
                            </text>

                            <text
                                x="1180"
                                y="230"
                                fontSize={16}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan dx="0" dy="0">
                                    {/* <tspan>11</tspan>
                                <tspan dx="0" dy="-10">
                                    th
                                </tspan>{" "}
                                <tspan dy="10">day</tspan> */}
                                    <tspan>11th day</tspan>
                                </tspan>
                            </text>

                            <text
                                x="970"
                                y="290"
                                fontSize={16}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="custom-vertical-text"
                            >
                                <tspan dx="0" dy="0">
                                    1-10 days
                                </tspan>
                            </text>
                        </>

                        {/* polylines */}
                        <>
                            <polyline
                                id="movingPolyline1"
                                className="glow_primary"
                                points={polylinePoints1}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />

                            <polyline
                                id="movingPolylinePentestgenixToJira"
                                className="glow_primary"
                                points={polylinePointsPentestgenixToJira}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />

                            <polyline
                                id="movingPolyline2"
                                className="glow_primary"
                                points={polylinePoints2}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />

                            <polyline
                                id="movingPolyline3"
                                className="glow_primary"
                                points={polylinePoints3}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />

                            <polyline
                                id="movingPolyline5_a"
                                className="glow_primary"
                                points={polylinePoints5_a}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />

                            <polyline
                                id="movingPolylineForDashed"
                                className="glow_primary"
                                points={polylineDashed}
                                fill="none"
                                strokeWidth="5"
                                stroke="red"
                            />
                        </>
                    </svg>
                </section>
            </div>
        </div>
    );
};

export default AnimatedFlowchart;
