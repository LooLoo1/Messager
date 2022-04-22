import React from "react";
import { Route, Routes } from "react-router-dom";
const Chat = React.lazy(() => import("./chat/index"));
// const Friends = React.lazy(() => import("./Friends"));

export const Routing = () => {
	return (
		<Routes>
			<Route path="/login" element={<div> </div>} />
			<Route path="/register" element={<div> </div>} />
			<Route path="/chat/:conversationId" element={<Chat/>} />
		</Routes>
	);
};
