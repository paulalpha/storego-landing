import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const Features = () => {
	return (
		<div className="boxes-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
								<Icon.Server />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Product Onboarding</a>
								</Link>
							</h3>

							<p>Onboard and ingest products faster using computer vision and natural language generation</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
								<Icon.Code />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Smart Applications</a>
								</Link>
							</h3>

							<p>Build AI into your applications with one click. As simple as setting up your models and deploying them</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
								<Icon.Users />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Marketing</a>
								</Link>
							</h3>

							<p>Get deeper insight in what customers want and when they want it. Generate marketing content at scale</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
								<Icon.GitBranch />
							</div>

							<h3>
								<Link href="/feature-details">
									<a>Data Pipelines</a>
								</Link>
							</h3>

							<p>Connect your disparate data in an intutive way using our pipe lines connector. Get the data you want and when.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features;
