import React, { useState } from "react";
import "/sss.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReturn from "./sss";

function Brouter() {
	<BrowserRouter>
		<Routes>
			<Route path="/callback" element={<LoginReturn />}></Route>
		</Routes>
	</BrowserRouter>;
}
